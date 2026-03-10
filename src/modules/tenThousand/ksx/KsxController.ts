import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ksx")
export default class KsxController {
  @operation({
    summary: "Get Ksx",
  })
  @get()
  static getKsx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ksx",
  })
  @post("{id}")
  static createKsx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
