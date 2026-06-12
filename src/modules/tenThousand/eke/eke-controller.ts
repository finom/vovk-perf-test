import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eke")
export default class EkeController {
  @operation({
    summary: "Get Eke",
  })
  @get()
  static getEke = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eke",
  })
  @post("{id}")
  static createEke = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
