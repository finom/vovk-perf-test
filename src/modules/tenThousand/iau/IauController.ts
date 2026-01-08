import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iau")
export default class IauController {
  @operation({
    summary: "Get Iau",
  })
  @get()
  static getIau = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iau",
  })
  @post("{id}")
  static createIau = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
