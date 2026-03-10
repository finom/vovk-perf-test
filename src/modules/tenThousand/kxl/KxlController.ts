import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kxl")
export default class KxlController {
  @operation({
    summary: "Get Kxl",
  })
  @get()
  static getKxl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kxl",
  })
  @post("{id}")
  static createKxl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
