import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ijw")
export default class IjwController {
  @operation({
    summary: "Get Ijw",
  })
  @get()
  static getIjw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ijw",
  })
  @post("{id}")
  static createIjw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
