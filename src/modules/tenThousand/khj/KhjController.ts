import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("khj")
export default class KhjController {
  @operation({
    summary: "Get Khj",
  })
  @get()
  static getKhj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Khj",
  })
  @post("{id}")
  static createKhj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
