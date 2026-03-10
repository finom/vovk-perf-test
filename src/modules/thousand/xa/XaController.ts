import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("xa")
export default class XaController {
  @operation({
    summary: "Get Xa",
  })
  @get()
  static getXa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Xa",
  })
  @post("{id}")
  static createXa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
