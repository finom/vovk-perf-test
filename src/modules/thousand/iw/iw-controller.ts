import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iw")
export default class IwController {
  @operation({
    summary: "Get Iw",
  })
  @get()
  static getIw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iw",
  })
  @post("{id}")
  static createIw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
