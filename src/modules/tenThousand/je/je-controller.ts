import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("je")
export default class JeController {
  @operation({
    summary: "Get Je",
  })
  @get()
  static getJe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Je",
  })
  @post("{id}")
  static createJe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
