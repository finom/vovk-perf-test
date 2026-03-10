import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("knh")
export default class KnhController {
  @operation({
    summary: "Get Knh",
  })
  @get()
  static getKnh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Knh",
  })
  @post("{id}")
  static createKnh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
