import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iup")
export default class IupController {
  @operation({
    summary: "Get Iup",
  })
  @get()
  static getIup = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iup",
  })
  @post("{id}")
  static createIup = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
