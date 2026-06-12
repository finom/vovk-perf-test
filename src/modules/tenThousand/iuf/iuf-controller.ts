import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iuf")
export default class IufController {
  @operation({
    summary: "Get Iuf",
  })
  @get()
  static getIuf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iuf",
  })
  @post("{id}")
  static createIuf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
