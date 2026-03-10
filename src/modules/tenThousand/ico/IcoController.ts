import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ico")
export default class IcoController {
  @operation({
    summary: "Get Ico",
  })
  @get()
  static getIco = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ico",
  })
  @post("{id}")
  static createIco = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
