import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kor")
export default class KorController {
  @operation({
    summary: "Get Kor",
  })
  @get()
  static getKor = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kor",
  })
  @post("{id}")
  static createKor = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
