import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("khl")
export default class KhlController {
  @operation({
    summary: "Get Khl",
  })
  @get()
  static getKhl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Khl",
  })
  @post("{id}")
  static createKhl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
