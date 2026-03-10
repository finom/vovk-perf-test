import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("caw")
export default class CawController {
  @operation({
    summary: "Get Caw",
  })
  @get()
  static getCaw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Caw",
  })
  @post("{id}")
  static createCaw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
