import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ikw")
export default class IkwController {
  @operation({
    summary: "Get Ikw",
  })
  @get()
  static getIkw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ikw",
  })
  @post("{id}")
  static createIkw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
