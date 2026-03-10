import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kzn")
export default class KznController {
  @operation({
    summary: "Get Kzn",
  })
  @get()
  static getKzn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kzn",
  })
  @post("{id}")
  static createKzn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
