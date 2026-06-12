import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kft")
export default class KftController {
  @operation({
    summary: "Get Kft",
  })
  @get()
  static getKft = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kft",
  })
  @post("{id}")
  static createKft = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
