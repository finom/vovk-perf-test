import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kve")
export default class KveController {
  @operation({
    summary: "Get Kve",
  })
  @get()
  static getKve = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kve",
  })
  @post("{id}")
  static createKve = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
