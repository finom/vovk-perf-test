import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kjs")
export default class KjsController {
  @operation({
    summary: "Get Kjs",
  })
  @get()
  static getKjs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kjs",
  })
  @post("{id}")
  static createKjs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
