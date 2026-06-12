import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kty")
export default class KtyController {
  @operation({
    summary: "Get Kty",
  })
  @get()
  static getKty = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kty",
  })
  @post("{id}")
  static createKty = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
