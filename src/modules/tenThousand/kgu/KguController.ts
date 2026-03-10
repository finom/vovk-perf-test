import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kgu")
export default class KguController {
  @operation({
    summary: "Get Kgu",
  })
  @get()
  static getKgu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kgu",
  })
  @post("{id}")
  static createKgu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
