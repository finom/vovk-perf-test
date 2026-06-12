import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iu")
export default class IuController {
  @operation({
    summary: "Get Iu",
  })
  @get()
  static getIu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iu",
  })
  @post("{id}")
  static createIu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
