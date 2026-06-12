import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iua")
export default class IuaController {
  @operation({
    summary: "Get Iua",
  })
  @get()
  static getIua = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iua",
  })
  @post("{id}")
  static createIua = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
