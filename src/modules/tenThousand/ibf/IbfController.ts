import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ibf")
export default class IbfController {
  @operation({
    summary: "Get Ibf",
  })
  @get()
  static getIbf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibf",
  })
  @post("{id}")
  static createIbf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
