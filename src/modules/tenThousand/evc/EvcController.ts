import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("evc")
export default class EvcController {
  @operation({
    summary: "Get Evc",
  })
  @get()
  static getEvc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Evc",
  })
  @post("{id}")
  static createEvc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
