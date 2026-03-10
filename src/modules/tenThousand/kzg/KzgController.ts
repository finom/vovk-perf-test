import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kzg")
export default class KzgController {
  @operation({
    summary: "Get Kzg",
  })
  @get()
  static getKzg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kzg",
  })
  @post("{id}")
  static createKzg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
