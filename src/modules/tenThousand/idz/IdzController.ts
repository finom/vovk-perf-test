import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("idz")
export default class IdzController {
  @operation({
    summary: "Get Idz",
  })
  @get()
  static getIdz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idz",
  })
  @post("{id}")
  static createIdz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
