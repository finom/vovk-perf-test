import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kjh")
export default class KjhController {
  @operation({
    summary: "Get Kjh",
  })
  @get()
  static getKjh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kjh",
  })
  @post("{id}")
  static createKjh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
