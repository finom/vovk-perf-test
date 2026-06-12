import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kwx")
export default class KwxController {
  @operation({
    summary: "Get Kwx",
  })
  @get()
  static getKwx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kwx",
  })
  @post("{id}")
  static createKwx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
