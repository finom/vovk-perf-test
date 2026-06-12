import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gio")
export default class GioController {
  @operation({
    summary: "Get Gio",
  })
  @get()
  static getGio = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gio",
  })
  @post("{id}")
  static createGio = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
