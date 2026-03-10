import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bro")
export default class BroController {
  @operation({
    summary: "Get Bro",
  })
  @get()
  static getBro = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bro",
  })
  @post("{id}")
  static createBro = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
