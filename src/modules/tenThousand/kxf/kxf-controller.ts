import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kxf")
export default class KxfController {
  @operation({
    summary: "Get Kxf",
  })
  @get()
  static getKxf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kxf",
  })
  @post("{id}")
  static createKxf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
