import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("igo")
export default class IgoController {
  @operation({
    summary: "Get Igo",
  })
  @get()
  static getIgo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Igo",
  })
  @post("{id}")
  static createIgo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
