import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kys")
export default class KysController {
  @operation({
    summary: "Get Kys",
  })
  @get()
  static getKys = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kys",
  })
  @post("{id}")
  static createKys = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
