import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kwp")
export default class KwpController {
  @operation({
    summary: "Get Kwp",
  })
  @get()
  static getKwp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kwp",
  })
  @post("{id}")
  static createKwp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
