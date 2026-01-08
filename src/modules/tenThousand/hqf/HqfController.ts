import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hqf")
export default class HqfController {
  @operation({
    summary: "Get Hqf",
  })
  @get()
  static getHqf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqf",
  })
  @post("{id}")
  static createHqf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
