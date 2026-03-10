import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dto")
export default class DtoController {
  @operation({
    summary: "Get Dto",
  })
  @get()
  static getDto = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dto",
  })
  @post("{id}")
  static createDto = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
