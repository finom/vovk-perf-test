import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("njo")
export default class NjoController {
  @operation({
    summary: "Get Njo",
  })
  @get()
  static getNjo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Njo",
  })
  @post("{id}")
  static createNjo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
