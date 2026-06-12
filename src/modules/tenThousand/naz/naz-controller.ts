import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("naz")
export default class NazController {
  @operation({
    summary: "Get Naz",
  })
  @get()
  static getNaz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Naz",
  })
  @post("{id}")
  static createNaz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
