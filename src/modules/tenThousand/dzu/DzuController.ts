import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dzu")
export default class DzuController {
  @operation({
    summary: "Get Dzu",
  })
  @get()
  static getDzu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dzu",
  })
  @post("{id}")
  static createDzu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
