import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dbd")
export default class DbdController {
  @operation({
    summary: "Get Dbd",
  })
  @get()
  static getDbd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dbd",
  })
  @post("{id}")
  static createDbd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
