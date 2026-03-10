import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ivo")
export default class IvoController {
  @operation({
    summary: "Get Ivo",
  })
  @get()
  static getIvo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ivo",
  })
  @post("{id}")
  static createIvo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
