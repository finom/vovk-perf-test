import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hgo")
export default class HgoController {
  @operation({
    summary: "Get Hgo",
  })
  @get()
  static getHgo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hgo",
  })
  @post("{id}")
  static createHgo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
