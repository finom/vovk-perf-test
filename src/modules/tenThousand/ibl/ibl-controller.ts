import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ibl")
export default class IblController {
  @operation({
    summary: "Get Ibl",
  })
  @get()
  static getIbl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ibl",
  })
  @post("{id}")
  static createIbl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
