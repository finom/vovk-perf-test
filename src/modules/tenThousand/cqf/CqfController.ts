import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cqf")
export default class CqfController {
  @operation({
    summary: "Get Cqf",
  })
  @get()
  static getCqf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqf",
  })
  @post("{id}")
  static createCqf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
