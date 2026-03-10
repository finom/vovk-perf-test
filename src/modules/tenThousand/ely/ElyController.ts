import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ely")
export default class ElyController {
  @operation({
    summary: "Get Ely",
  })
  @get()
  static getEly = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ely",
  })
  @post("{id}")
  static createEly = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
