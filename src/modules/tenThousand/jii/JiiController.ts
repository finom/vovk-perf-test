import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jii")
export default class JiiController {
  @operation({
    summary: "Get Jii",
  })
  @get()
  static getJii = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jii",
  })
  @post("{id}")
  static createJii = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
