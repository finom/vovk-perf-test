import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iiy")
export default class IiyController {
  @operation({
    summary: "Get Iiy",
  })
  @get()
  static getIiy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iiy",
  })
  @post("{id}")
  static createIiy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
