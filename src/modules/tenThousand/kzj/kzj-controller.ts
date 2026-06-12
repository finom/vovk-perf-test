import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kzj")
export default class KzjController {
  @operation({
    summary: "Get Kzj",
  })
  @get()
  static getKzj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kzj",
  })
  @post("{id}")
  static createKzj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
