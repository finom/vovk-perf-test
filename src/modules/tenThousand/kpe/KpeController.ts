import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kpe")
export default class KpeController {
  @operation({
    summary: "Get Kpe",
  })
  @get()
  static getKpe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kpe",
  })
  @post("{id}")
  static createKpe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
