import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kgs")
export default class KgsController {
  @operation({
    summary: "Get Kgs",
  })
  @get()
  static getKgs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kgs",
  })
  @post("{id}")
  static createKgs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
