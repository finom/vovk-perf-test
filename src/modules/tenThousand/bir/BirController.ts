import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bir")
export default class BirController {
  @operation({
    summary: "Get Bir",
  })
  @get()
  static getBir = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bir",
  })
  @post("{id}")
  static createBir = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
