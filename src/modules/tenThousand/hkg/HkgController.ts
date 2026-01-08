import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hkg")
export default class HkgController {
  @operation({
    summary: "Get Hkg",
  })
  @get()
  static getHkg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hkg",
  })
  @post("{id}")
  static createHkg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
